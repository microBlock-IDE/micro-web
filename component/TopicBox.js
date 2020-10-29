import { Card } from 'react-bootstrap';
import Link from 'next/link'

export default function TopicBox(props) {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={props.cover} />
      <Card.Body>
        <Card.Title className="card-title" dangerouslySetInnerHTML={{ __html: props.title }}></Card.Title>
        <Card.Text className="card-text"><span dangerouslySetInnerHTML={{ __html: props.text }}></span> <Link href={`/post/${props.id}/${encodeURI(props.title)}`}>อ่านต่อ</Link></Card.Text>
      </Card.Body>
    </Card>
  )
}
