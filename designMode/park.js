/**
 * @author caijianjia
 * @date 2021-05-15 23:56
 */

class Park {
    constructor(){
        this.carList = {}
    }
    static screen(car, type, carList){
        return new Screen().show(car, type, carList)
    }
    static camera(car){
        return new Camera().shot(car)
    }
    in(car){
        if(!this.carList[car.number]){
            this.carList[car.number] = {}
        }
        this.carList[car.number].inTime = Park.camera(car).time
        return Park.screen(car, 'in', this.carList)
    }
    out(car){
        this.carList[car.number].outTime = Park.camera(car).time
        return Park.screen(car, 'out', this.carList)
    }
}
class Floor{
    constructor(index){
        this.index = index
    }
    in(car, park){
        if(!park.carList[car.number]){
            park.carList[car.number] = {}
        }
        park.carList[car.number].index = this.index
    }
    out(car, park){
        park.carList[car.number].index = -1
    }
}
class Place{
    constructor(stopNum){
        this.stopNum = stopNum
    }
    in(car, park){
        if(!park.carList[car.number]){
            park.carList[car.number] = {}
        }
        // 如果当前车位已有车，则不可驶入车位
        const data = park.carList
        const newData = Object.entries(data).filter(v=>{
            return !v[1].outTime || v[1].inTime > v[1].outTime
        })
        const resData = newData.filter(v=>{
            let state = false
            if(v[1].stopNum === this.stopNum)
            return v
        })
        if(resData && resData.length>0){
            // throw err
            throw(`${resData[0][1].index}层${this.stopNum}号车位已有车`)
        } else {
            park.carList[car.number].stopNum = this.stopNum
        }
    }
    out(car, park){
        park.carList[car.number].stopNum = -1
    }
}
class Car{
    constructor(number){
        this.number = number
    }
}
class Camera{
    shot(car){
        return {
            number: car.number,
            time: new Date()
        }
    }
}
class Screen{
    show(car, type, carList){
        let obj = {}
        switch (type) {
            case 'in':
                obj = {
                    number: car.number,
                    inTime: new Date()
                }
                break
            case 'out':
                obj = {
                    number: car.number,
                    allTime: carList[car.number].outTime - carList[car.number].inTime
                }
                break
        }
        return obj
    }
}
const park = new Park()
const floor = new Floor(1)
const place = new Place(2)
const car = new Car('001')
console.log('before-pack', JSON.stringify(park.carList))
park.in(car)
console.log('in-pack', JSON.stringify(park.carList))
floor.in(car, park)
console.log('in-floor', JSON.stringify(park.carList))
place.in(car, park)
console.log('in-place', JSON.stringify(park.carList))
place.out(car, park)
console.log('out-place', JSON.stringify(park.carList))
floor.out(car, park)
console.log('out-floor', JSON.stringify(park.carList))
park.out(car)
console.log('out-pack', JSON.stringify(park.carList))



