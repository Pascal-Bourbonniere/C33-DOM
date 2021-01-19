class Fruit {
    constructor(){
        this.element = document.createElement('div')
        this.element.setAttribute("class", "fruit_1 fruit")
        this.x = Math.random()*895
        this.y = 500
        this.isAlive = true
        this.isCut = false
        this.velocity = -Math.random()*5 - 5
        document.getElementById('game').appendChild(this.element); 
        this.move()
        document.getElementById('game')
        this.element.onclick = () => {
            if (!this.isCut){
                this.isCut = true
                this.element.setAttribute("class", "fruit_1-cut fruit")
                score++
                document.getElementById('score').innerHTML = `${score}`
            }
        }
    }

    move () {
        if (this.y <= 0) {
            this.velocity *= -1
        }
        this.y += this.velocity
        
        this.element.style.top = this.y
        this.element.style.left = this.x
    }

    tick() {
        if (this.y > 500) {
            if (!this.isCut) {
                life--
                document.getElementById('life').innerHTML = `${life}`
            }
            this.isAlive = false
            this.element.remove()
        }
        this.move()
    }
}