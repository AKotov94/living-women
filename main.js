import EmblaCarousel from 'embla-carousel';

document.addEventListener('DOMContentLoaded', () => {
const wrapperNode = document.querySelector('.embla')
const viewportNode = wrapperNode.querySelector('.embla__viewport')
const prevButtonNode = wrapperNode.querySelector('.embla__prev')
const nextButtonNode = wrapperNode.querySelector('.embla__next')

const emblaApi = EmblaCarousel(viewportNode, { loop: false })

prevButtonNode.addEventListener('click', () => emblaApi.scrollPrev(), false)
nextButtonNode.addEventListener('click', () => emblaApi.scrollNext(), false)
});

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

  const feedbackData = [
    {author: 'Елена', text: 'Танечка, ты топ! Благодарю тебя за практику. Я впервые за долгое время смогла прогрузиться. Я долго ждала своё тотемное животное. А потом вспомнила, что у меня есть мой белый пушистый Зайка от моей Анимы с последнего курса ШБ.'},
    {author: 'Анастасия', text: 'Доброе утро, Татьяна! Благодарю за твою поддержку что была рядом со мной на этом пути. Очень ценно было все наше общение и немножко жаль что всезавершается ((Да и я надеюсь, что ещё где‑то пересечёмся, в этом прекрасном пространстве. Пусть и твой Путь будет прекрасным, мощным, наполненным и бесконечно интересным, ведь он никогда не заканчивается.'},
    {author: 'Тамара', text: 'Боже, нет!Я же буду скучать. Как же без отчётов, челенджей, без тебя Танюша, без обратной связи, без мягкой и такой нужной поддержки? Но, у нас есть ещё целых 6 месЭто очень хорошо. А то как то это так неожиданноНо не будет тебя?'},
  ]

  const slideTemplate = document.getElementById('feedback-slide-template');

  feedbackData.forEach(comment => {
    const slideFragment = slideTemplate.content.cloneNode(true);
    const container = document.querySelector('.embla__container');
    slideFragment.querySelector('.feedback__author').textContent = comment.author;
    slideFragment.querySelector('.feedback__text').textContent = comment.text;
    container.appendChild(slideFragment);
  });
  console.log(container)