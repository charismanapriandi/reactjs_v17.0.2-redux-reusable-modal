import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './components/Button';
import Gap from './components/Gap';
import Modal from './components/Modal';

const App = () => {
    const modalState = useSelector(state => state)
    const dispatch = useDispatch();
    // console.log(modalState);
    return (
        <div className="h-screen w-full bg-gray-50">
            <div className="flex pt-20 mx-20">
                <Button
                    label="Project Modal"
                    warning={true}
                    onClick={()=> dispatch({type: 'PROJECT_MODAL'})}
                />
                <Gap width={30} />
                <Button 
                    label="User Modal"
                    secondary={true}
                    onClick={() => dispatch({type: 'USER_MODAL'})}
                />
                <Gap width={30} />
                <Button 
                    label="Delete Modal"
                    danger={true}
                    onClick={() => dispatch({type: 'DELETE_MODAL'})}
                />
            </div>
            <Modal
                title={modalState.name}
                modalClass={modalState.status ? 'top-10 opacity-100' : '-top-60 opacity-0 pointer-events-none'}
                bgClass={modalState.status ? 'opacity-75 pointer-events-auto' : 'opacity-0 pointer-events-none'}
                content={
                    <div>
                      <Gap height={20} />
                        <Button 
                            label="Close Modal"
                            primary={true}
                            onClick={() => dispatch({type: 'CLOSE_MODAL'})}
                        />
                    </div>
                }
            />
        </div>
    )
}

export default App
