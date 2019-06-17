//core functionality from React & Bootstrap
import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';

//CSS imports
import '../styles/Comment.css';

class CommentComponent extends Component {
    
    render() {
        return (
            <div class="bigcontainer">
                <div className="containerComments">
                    <h5 className="commentH">Kommentarer</h5>
                    <div className="media">
                        <div className="media-left">
                            <img src="https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg"alt="" className="media-object" style={{width: "100px", border: "1px solid #c2c2c2"}}/>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Jeanette Svensson</h4> 
                            <span className="posted">( 2 juni 2019 )</span>
                            <p className="quote">“Så himla god och så enkelt att tillaga. Försvinnande god tycker alla.”</p>
                        </div>
                    </div>
                    <div className="media">
                        <div className="media-left">
                            <img src="https://pg-biomedical.pglia.com/wp-content/uploads/2018/11/beautiful-woman-in-field-L5ARB9C-1.jpg" alt="" className="media-object" style={{width: "100px", border: "1px solid #c2c2c2"}}/>
                        </div>
                        <div className="media-body">
                            <h4 className="media-heading">Sara Larsson</h4>
                            <span className="posted">( 12 juni 2016 )</span>
                            <p className="quote">“Bästa receptet jag provat! Är van amatörbagare men det här slår allt annat. Alla älskar den!”</p>
                        </div>
                    </div>
                </div>
                <div className="container comment">
                    <h2 className="commentH2">Lämna en kommentar!</h2>
                    <Form>
                        <div className="form-group">
                            <textarea type="text" rows="5" className="form-control"></textarea>
                        </div>
                        <Button type="submit" variant="success" className="submitComment">Lämna kommentar</Button>
                    </Form>
                </div>
            </div>
        );
    }
}
export default CommentComponent;