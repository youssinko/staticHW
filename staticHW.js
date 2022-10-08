class Governor{
    constructor(name,age,eduction,experience){
        this.name1 = name1
        this.age1 = age1
        this.eduction = eduction
        this.experience = experience
    }
    static controlling(){
        console.log(`lets change state law`)
    }
    static voting(){
        console.log(`Time for election`)
    }
}
Governor.controlling()
Governor.voting()
//==============INHERITANCE===========
class Person{
    constructor(name,age,location){
        this.name = name;
        this.age = age
        this.location = location
    }
    sleeping(){
        console.log(`it's 10 PM, Time to sleep`)
    }
    vaccinating(){
        if(this.age > 2){
            console.log(`it's time for flu Shot!`)
        }else {console.log('too young for flu Shot')}
    }
    beingHealthing(){
        console.log(`it's summer time at ${this.location}, please stay hydrated.`)
    }
    
}
class PostalWorker extends Person{
    constructor(name,age,location,jobTitle){
    super(name,age,location)
    this.job = jobTitle
    }
working(){
this.working = true
console.log(`my job title is ${this.job}`)
}
}
const worker1= new PostalWorker('Keith',40,'NYC','postal worker')
const worker2= new PostalWorker('John',41,'New Jersey', 'postal Worker')
worker1.working()
worker2.working()
worker1.beingHealthing()
worker2.beingHealthing()
worker1.vaccinating()
worker2.vaccinating()
worker1.sleeping()
worker2.sleeping()



 class Chef extends Person{
    constructor(name,age,location,cuisine,chef = false){
    super(name,age,location)
    this.cuisine = cuisine
    this.chef = chef
    
    }
beingChef(){
   if(this.chef === true){
    console.log(`I work at ${this.cuisine} cuisine`)
   } else{console.log(`i work at ${this.cuisine} cuisine but i am not a chef`)}
}
}
 const chef1= new Chef('Tommy',30 ,'NYC','french',true)
 const chef2 = new Chef('Mary',45,'Florida','Mexican',false)
 chef1.beingChef()
 chef2.beingChef()
 console.log(chef1)
 console.log(chef2)
 chef1.vaccinating()
 chef2.beingHealthing()
 chef1.beingHealthing()
 chef1.sleeping()