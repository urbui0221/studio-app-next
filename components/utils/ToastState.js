import React, { createContext, useState } from 'react'

export const ToastContext = createContext();

const ToastStateProvider = ({children}) => {
    const [showToast,setToast] = useState(false);
    const [message,setmessage] = useState('');
    const [subscribe,setSubscribe] = useState(false);
    const [submsg,setsubsMsg] = useState('');
    return (
       <ToastContext.Provider value={{ 
        showToast,
        message,
        subscribe,
        submsg,
        submessge : message => setsubsMsg(message),
        subscriber : state => setSubscribe(state),
        nameSetter : message => setmessage(message),
        toaster : state => setToast(state) }} >
           {children}
       </ToastContext.Provider>
    )
}

export default ToastStateProvider
