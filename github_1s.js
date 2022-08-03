var btn = document.createElement('button')
btn.style = `     
  position: absolute;
  top: 207px;
  left: 20px;
  width: 80px;
  height: 40px;
  line-height: 40px;
  border: none;
  border-radius: 7px;
  background-color: #24292f;
  color: #fff;
  font-size: 17px;
  `
btn.innerHTML = '+1s'

btn.addEventListener('click', () => {
  window.location = window.location.href.replace('github.com', 'github1s.com')
})

document.body.appendChild(btn)
