function main() {
    /** @type {HTMLCanvasElement} */
    const canvas1 = document.getElementById("canvas1");
    const ctx = canvas1.getContext("2d");
    // Сначала рисуем лимонад.
    ctx.fillStyle = "rgb(242 142 28)"
    ctx.fillRect(100, 20, 200, 380)

    // Рисуем кружку линиями
    ctx.lineWidth = 1
    ctx.beginPath()
    // Кружка (куда наливается жидкость).
    ctx.moveTo(100, 10)
    ctx.lineTo(100, 400)
    ctx.lineTo(300, 400)
    ctx.lineTo(300, 10)
    // Ручка - внешние 3 линии.
    ctx.moveTo(300, 30)
    ctx.lineTo(390, 30)
    ctx.lineTo(390, 380)
    ctx.lineTo(300, 380)
    // Ручка - внутренние 3 линии.
    ctx.moveTo(300, 50)
    ctx.lineTo(370, 50)
    ctx.lineTo(370, 360)
    ctx.lineTo(300, 360)
    ctx.stroke()

    // Рисуем два пузырики.
    // Каждый пузырик белого цвета - rgb 255 255 255.
    // Каждый пузырки обведён чёрным цветом.
    ctx.fillStyle = "rgb(255 255 255)"
    // Первый пузырь - сначала закрашываем круг белым
    ctx.beginPath()
    ctx.arc(120, 80, 10, 0, Math.PI * 2)
    ctx.fill()
    // Теперь рисуем чёрным цветом контур
    ctx.beginPath()
    ctx.arc(120, 80, 10, 0, Math.PI * 2)
    ctx.stroke()
    // Второй пузырь 
    ctx.beginPath()
    ctx.arc(170, 250, 15, 0, Math.PI * 2)
    ctx.fill()
    ctx.beginPath()
    ctx.arc(170, 250, 15, 0, Math.PI * 2)
    ctx.stroke()
}

window.onload = main