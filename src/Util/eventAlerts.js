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
    if (response.includes('created') || response.includes('updated')) {
        setTimeout(() => {
            navigate('/events')
        }, 1000)
    }
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
                const swalConfir = {
                    icon: '',
                    text: '',
                    iconColor: '',
                    title: '',
                    timer: 0
                }
                deleteEvent(setResponse, id).then(response => {
                    if(response){
                        swalConfir.icon = 'success'
                        swalConfir.text = 'Event Deleted'
                        swalConfir.iconColor = 'black'
                        swalConfir.title = 'Deleted'
                        swalConfir.timer = 2000
                        swalConfir.showConfirmButton = false
                        swal.fire(swalConfir)
                        setTimeout(() => {
                            navigate('/events')
                        }, 1000)
                    }else{
                        swalConfir.icon = 'error'
                        swalConfir.text = 'Something went wrong'
                        swalConfir.iconColor = 'red'
                        swalConfir.title = 'Not deleted'
                        swalConfir.timer = 2000
                        swal.fire(swalConfir)
                    }
                })
                
            }
        })
    }
}


export { putPostEventAlert, deleteEventAlert }