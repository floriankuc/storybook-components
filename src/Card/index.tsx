import React, { FC, ReactNode } from 'react'
import './card.scss'

interface Link {
  url: string
  displayName: string
}

interface CardProps {
  onClick?: () => void
  title: string
  description: string
  links?: Link[]
  number?: number
}

export const Card: FC<CardProps> = (props: CardProps) => {
  const renderLinks = (): ReactNode[] | undefined => {
    if (props.links)
      return props.links.map((link: Link) => (
        <a key={link.displayName} href={link.url}>
          {link.displayName}
        </a>
      ))
  }

  const prependN = (n: number): string => (n.toString().length === 1 ? `0${n}` : '' + n)

  return (
    <>
      <div className="card">
        <h3 className="card__title">{props.title}</h3>
        <p className="card__desc">{props.description}</p>
        <p className="card__number">{props.number && prependN(props.number)}</p>
      </div>
      <div className="card__links">{renderLinks()}</div>
    </>
  )
}
