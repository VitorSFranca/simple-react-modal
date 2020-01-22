# Simple React Modal Easy Use

This is package contains a simple React Modal that is easy to use and manipulate.

# Installation
Npm:

    npm i simple-react-modal-easy-use
Yarn:

    yarn add simple-react-modal-easy-use

## How to use

    import Modal from  'simple-react-modal-easy-use';
    ...
	...
	    <Modal
			open={open}
			closeModal={onClose}
		>
			<h1>Modal Content</h1>
		</Modal>

## Props

| Prop Name | Description | Required | Type | Default Value |
|--|--|--|--|--|
| open | Indicates if the modal is open or not | true| boolean | undefined
| closeModal| Function called when modal should be closed | true | boolean | undefined 
| closeOnEsc| Indicates if modal should be closed when esc is pressed | false | boolean | true
| closeOnClickOutside| Indicates if modal should be closed when clicked outside of modal content | false | boolean | true
| modalClassName| ClassName to manipulate modal style | false | string | simple-react-modal
| modalStyle| Object containing css style of modal | false | object | {}
| backgroundClassName| ClassName to manipulate background style | false | string | simple-react-modal-background
| backgroundStyle| Object containing css style of background| false | object | {}
| hasBackground| Indicates if contains a background behind modal | false | boolean | true


## Default CSS Style

    .simple-react-modal {
		width:  fit-content;
		height:  fit-content;
		background:  white;
		position:  fixed;
		left:  50%;
		top:  50%;
		transform:  translate(-50%, -50%);
		z-index:  2;
		border-radius:  5px;
	}
		
	.simple-react-modal-background {
		width:  100vw;
		height:  100vh;
		z-index:  1;
		background:  rgba(190, 195, 204, 0.5);
		position:  fixed;
		top:  0; right:  0; bottom:  0; left:  0;
	}

## Contribute:

[https://github.com/VitorSFranca/simple-react-modal](https://github.com/VitorSFranca/simple-react-modal)