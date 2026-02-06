import EmblaCarousel from 'embla-carousel';

const wrapperNode = document.querySelector('.embla')
const viewportNode = wrapperNode.querySelector('.embla__viewport')
const dotsNode = wrapperNode.querySelector('.embla__dots')
const prevButtonNode = wrapperNode.querySelector('.embla__prev')
const nextButtonNode = wrapperNode.querySelector('.embla__next')

const emblaApi = EmblaCarousel(viewportNode, 
  { loop: false, 
    inViewMargin: '0px -20px 0px 0px'
  })

prevButtonNode.addEventListener('click', () => emblaApi.scrollPrev(), false)
nextButtonNode.addEventListener('click', () => emblaApi.scrollNext(), false)

let dotNodes = []

const createDotButtonHtml = (emblaApi, dotsNode) => {
  const dotTemplate = document.getElementById('embla-dot-template')
  const snapList = emblaApi.slideNodes()
  dotsNode.innerHTML = snapList.reduce((acc, slide) => acc + dotTemplate.innerHTML, '')
  return Array.from(dotsNode.querySelectorAll('.embla__dot'))
}

const addDotButtonClickHandlers = (emblaApi, dotNodes) => {
  dotNodes.forEach((dotNode, index) => {
    dotNode.addEventListener('click', () => emblaApi.scrollTo(index), false)
  })
}

const createAndSetupDotButtons = (emblaApi, dotsNode) => {
  emblaApi.reInit()
  dotNodes = createDotButtonHtml(emblaApi, dotsNode)
  addDotButtonClickHandlers(emblaApi, dotNodes)
}

const toggleDotButtonsActive = (emblaApi, dotNodes) => {
  if (!dotNodes.length) return
  const previous = emblaApi.previousScrollSnap()
  const selected = emblaApi.selectedScrollSnap()
  dotNodes[previous].classList.remove('embla__dot--selected')
  dotNodes[selected].classList.add('embla__dot--selected')
}

const feedbackData = [
  {author: 'Елена', text: 'Танечка, ты топ! Благодарю тебя за практику. Я впервые за долгое время смогла прогрузиться. Я долго ждала своё тотемное животное. А потом вспомнила, что у меня есть мой белый пушистый Зайка от моей Анимы с последнего курса ШБ.'},
  {author: 'Анастасия', text: 'Доброе утро, Татьяна! Благодарю за твою поддержку что была рядом со мной на этом пути. Очень ценно было все наше общение и немножко жаль что всезавершается ((Да и я надеюсь, что ещё где‑то пересечёмся, в этом прекрасном пространстве. Пусть и твой Путь будет прекрасным, мощным, наполненным и бесконечно интересным, ведь он никогда не заканчивается.'},
  {author: 'Тамара', text: 'Боже, нет!Я же буду скучать. Как же без отчётов, челенджей, без тебя Танюша, без обратной связи, без мягкой и такой нужной поддержки? Но, у нас есть ещё целых 6 месЭто очень хорошо. А то как то это так неожиданноНо не будет тебя?'},
]

const slideTemplate = document.getElementById('feedback-slide-template');
const container = document.querySelector('.embla__container');

feedbackData.forEach(comment => {
  const slideFragment = slideTemplate.content.cloneNode(true);
  slideFragment.querySelector('.feedback__author').textContent = comment.author;
  slideFragment.querySelector('.feedback__text').textContent = comment.text;
  container.appendChild(slideFragment);
});

createAndSetupDotButtons(emblaApi, dotsNode)
toggleDotButtonsActive(emblaApi, dotNodes)
emblaApi.on('select', (emblaApi) => toggleDotButtonsActive(emblaApi, dotNodes))

document.querySelectorAll('.more-button').forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === "Подробнее") {
      button.textContent = "Скрыть"
    } else {
      button.textContent = "Подробнее"
    }
    button.classList.toggle('show-more')
  })
});