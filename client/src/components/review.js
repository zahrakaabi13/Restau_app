import { Carousel } from 'react-bootstrap'

export const Review = () => {
    return (
        <div className="p-3">
            <Carousel className="mt-5">
            <Carousel.Item interval={1000}>
                    <div className="d-flex p-3 m-5">
                        <div>
                            <box-icon type='solid' name='quote-left'></box-icon>
                            <p className="p-3">Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte</p>
                            <h6 className="p-3">Ali Ahmed Khaled</h6>
                        </div>

                        <div>
                            <box-icon type='solid' name='quote-left'></box-icon>
                            <p className="p-3">Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte</p>
                            <h6 className="p-3">Zahra Kaabi</h6>
                        </div>

                        <div>
                            <box-icon type='solid' name='quote-left'></box-icon>
                            <p className="p-3">Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte,</p>
                            <h6 className="p-3">Mohammed Mansouri</h6>
                        </div>
                    </div>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <div className="d-flex p-5 m-5">
                        <div>
                            <box-icon type='solid' name='quote-left'></box-icon>
                            <p className="p-3">Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte</p>
                            <h6 className="p-3">Mohammed Amine Samet</h6>
                        </div>

                        <div>
                            <box-icon type='solid' name='quote-left'></box-icon>
                            <p className="p-3">Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte</p>
                            <h6 className="p-3">Wiem Taieb</h6>
                        </div>

                        <div>
                            <box-icon type='solid' name='quote-left'></box-icon>
                            <p className="p-3">Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte</p>
                            <h6 className="p-3">Zouhour Hamza</h6>
                        </div>
                    </div>
            </Carousel.Item>
            </Carousel>

            
        </div>
    )
}