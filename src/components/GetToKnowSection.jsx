import React, { useState } from "react"
  import "./css/GetToKnow.css"
  import { IoChevronBack, IoChevronForward, IoAdd } from "react-icons/io5"

  const features = [
    {
      category: "Health",
      title: "Knows you by heart.",
      background: "bg-black",
      content: (
        <div className="heart-monitor">
          <div className="heart-animation">
            <div className="heart"></div>
          </div>
          <div className="bpm">
            <span className="current">Current</span>
            <div className="reading">
              <span className="number">68</span>
              <span className="unit">BPM</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      category: "Fitness",
      title: "Every move counts.",
      background: "bg-rose",
      content: (
        <div className="fitness-image">
          <img src="/placeholder.svg?height=400&width=300" alt="Person exercising" />
        </div>
      ),
    },
    {
      category: "Connectivity",
      title: "The right call for staying in touch.",
      background: "bg-blue-light",
      content: (
        <div className="watch-screen">
          <img src="/placeholder.svg?height=400&width=300" alt="Apple Watch call interface" />
        </div>
      ),
    },
    {
      category: "Safety",
      title: "Good help is easy to find.",
      background: "bg-green-light",
      content: (
        <div className="safety-map">
          <div className="sos-button">SOS</div>
        </div>
      ),
    },
    {
      category: "Apple Watch + iPhone",
      title: "Dynamic duo.",
      background: "bg-white",
      content: (
        <div className="devices-image">
          <img src="/placeholder.svg?height=400&width=300" alt="Apple Watch and iPhone" />
        </div>
      ),
    },
  ]

  const FeatureCard = ({ category, title, background, content }) => (
    <div className={`feature-card ${background}`}>
      <div className="card-content">
        <div className="text-content">
          <span className="category">{category}</span>
          <h2>{title}</h2>
        </div>
        {content}
        <button className="add-button">
          <IoAdd />
        </button>
      </div>
    </div>
  )

  const GetToKnowSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const visibleCards = 3 // Number of cards visible at once

    const nextSlide = () => {
      setCurrentIndex((prev) => Math.min(prev + 1, features.length - visibleCards))
    }

    const prevSlide = () => {
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }

    return (
      <div className="apple-watch-features">
        <h1>Get to know Apple Watch.</h1>

        <div className="features-container">
          <div className="features-wrapper">
            <div
              className="features-track"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
              }}
            >
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          <div className="carousel-controls">
            <button
              className="nav-button prev"
              onClick={prevSlide}
              disabled={currentIndex === 0}
              aria-label="Previous slide"
            >
              <IoChevronBack />
            </button>
            <button
              className="nav-button next"
              onClick={nextSlide}
              disabled={currentIndex === features.length - visibleCards}
              aria-label="Next slide"
            >
              <IoChevronForward />
            </button>
          </div>
        </div>
      </div>
    )
  }

  export default GetToKnowSection

