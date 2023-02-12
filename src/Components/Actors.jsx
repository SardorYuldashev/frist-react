import React from 'react'

const Maykl = () => {
  return (
    <div className="actorCard">
      <div className="actorCard-imgBox">
        <img src="https://www.film.ru/sites/default/files/people/1463795-2161704.jpg" alt="" className="actorCard-img" />
      </div>
      <h3 className="actorCard-title">
        Майкл Бакари Джордан
      </h3>
    </div>
  )
}

const Tenoch = () => {
  return (
    <div className="actorCard">
      <div className="actorCard-imgBox">
        <img src="https://upload.wikimedia.org/wikipedia/ru/thumb/f/ff/Tenoch_Huerta_as_Namor.jpg/640px-Tenoch_Huerta_as_Namor.jpg" alt="" className="actorCard-img" />
      </div>
      <h3 className="actorCard-title">
        Теноч Уэрта
      </h3>
    </div>
  )
}

const Angella = () => {
  return (
    <div className="actorCard">
      <div className="actorCard-imgBox">
        <img src="https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yODc4MTU4OS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTcxOTgwMTgxNH0.u-Ee0n24vZTPbPoXJri6kXztT66uyssLYyLiD9pPKQY/img.jpg?width=600&height=600&quality=90&coordinates=728%2C0%2C728%2C0" alt="" className="actorCard-img" />
      </div>
      <h3 className="actorCard-title">
        Анджела Бассетт
      </h3>
    </div>
  )
}

const Meybl = () => {
  return (
    <div className="actorCard">
      <div className="actorCard-imgBox">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5jy4tvza9MH_hwh7G2VEAMU5v2Ez21vWPN1_QiAYUpkmfHvEEzZzmtkJ8cng-iuYqzq8&usqp=CAU" alt="" className="actorCard-img" />
      </div>
      <h3 className="actorCard-title">
        Мэйбл Кадена
      </h3>
    </div>
  )
}

const Uinston = () => {
  return (
    <div className="actorCard">
      <div className="actorCard-imgBox">
        <img src="https://www.kino-teatr.ru/acter/album/487673/923675.jpg" alt="" className="actorCard-img" />
      </div>
      <h3 className="actorCard-title">
        Уинстон Дьюк
      </h3>
    </div>
  )
}
const Martin = () => {
  return (
    <div className="actorCard">
      <div className="actorCard-imgBox">
        <img src="https://cdn.7days.ru/pic/172/A7011DE84875A09C44257B47004B078D/50904/46.jpg" alt="" className="actorCard-img" />
      </div>
      <h3 className="actorCard-title">
        Мартин Фримен
      </h3>
    </div>
  )
}

const Xari = () => {
  return (
    <div className="actorCard">
      <div className="actorCard-imgBox">
        <img src="https://www.kinonews.ru/insimgs/2022/persimg/persimg50938.jpg" alt="" className="actorCard-img" />
      </div>
      <h3 className="actorCard-title">
      Хари Неф
      </h3>
    </div>
  )
}

const Actors = () => {
  return (
    <section id='actors'>
      <div className="container p-5 d-flex justify-content-between gap-5 flex-wrap">
        <Maykl />
        <Angella />
        <Tenoch />
        <Meybl />
        <Uinston />
        <Xari />
        <Martin />
      </div>
    </section>
  )
}

export default Actors
