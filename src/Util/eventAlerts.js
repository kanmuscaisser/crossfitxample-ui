import swal from 'sweetalert2'
import { deleteEvent } from './httpEvents'

const putPostEventAlert = (response, navigate) => {
    let icon = 'error'
    if (response.includes('created') || response.includes('updated')) {
        icon = 'success'
    }
    swal.fire({
        icon: icon,
        iconColor: icon === 'error' ? 'red' : 'black',
        imageAlt: 'imgLogo',
        title: 'Event',
        text: response,
        showConfirmButton: false,
        timer: 3000,
    })
    setTimeout(() => {
        navigate('/events')
    }, 1000)
}

const deleteEventAlert = (setResponse, id, navigate) => {
    if (id) {
        swal.fire({
            width: 600,
            icon: 'question',
            title: 'Want to delete this event?',
            iconColor: 'black',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            reverseButtons: true,
            confirmButtonColor: 'black',
        }).then(response => {
            if (response.isConfirmed) {
                deleteEvent(setResponse, id)
                swal.fire({
                    icon: 'success',
                    text: 'Event Deleted',
                    iconColor: 'black',
                    title: 'Deleted',
                    showConfirmButton: false,
                    timer: 3000
                })
                setTimeout(() => {
                    navigate('/events')
                }, 1000)
            }
            //error alert must be builded
        })
    }
}


export { putPostEventAlert, deleteEventAlert }