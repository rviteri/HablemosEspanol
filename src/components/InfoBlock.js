import React from 'react'

export default function InfoBlock({title, htmlContent, pictureUrl, reversed = false}) {
  return (
    <section className="section-info-block">
      <div className={`section-content info-block-container -not-visible${reversed ? " -reversed" : ""}`}>
        <div className="info-block__picture-container">
          <img className="info-block__picture" src={pictureUrl}></img>
        </div>
        <div className="info-block__content-container">
          <div className="info-block__content">
            <h2 className="info-block__content-title">{title}</h2>
            <div className="info-block__content-html">
              {htmlContent}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}