export const Pasta = () => {
    const db_pasta = [
        {
            "image" : "/img/pasta1.jpg",
            "name" : "당신에게 좋은 아름다운 날",
            "traduction" : "Made with love"
        },
        {
            "image" : "/img/pasta2.jpg",
            "name" : "이것은 파스타입니다",
            "traduction" : "Made with love"
        },
        {
            "image" : "/img/pasta3.jpg",
            "name" : "무슨 헤케루니",
            "traduction" : "Made with love"
        },
        {
            "image" : "/img/pasta4.jpg",
            "name" : "이 빌어먹을 코드가 뭐야",
            "traduction" : "Made with love"
        }
    ]
    return (
        <>
           <div className="d-flex pasta-title">
              <h1>Our Basic Gradient</h1>
              <div></div>
           </div>


           <div className="cards-pasta mt-5 pt-5">

           {db_pasta.map(element => 
                  <div className="pasta">
                  <img src={element.image} alt="" />
                  <h5 className="pasta-descrip">{element.name}</h5>
                  </div>
            )}
            </div>
        </>
    )
}