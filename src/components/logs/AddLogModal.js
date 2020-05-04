import React, {useState} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = () => {
    const [message, setMessage] = useState('');
    const [tech,setTech] = useState('');
    const [attention,setAttention] = useState(false);

    const onSubmit = () => {
        if(message === '' || tech === ''){
            M.toast({html : 'Please enter message and tech'})
        } else {        
            console.log(message, tech, attention);
            setAttention(false);
            setMessage('');
            setTech('');
        }
    }

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className='active'>Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className='input-field'>
                        <select name='tech' value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value='' disabled>Select Technician</option>
                            <option value='Tejas Dahad'>Tejas Dahad</option>
                            <option value='Madhur Dhoot'>Madhur Dhoot</option>
                            <option value='Jinx Brahman'>Jinx Brahman</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)} />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a href="#!" className="modal-close waves-effect blue waves-light btn" onClick={onSubmit}>Enter</a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}
export default AddLogModal;
