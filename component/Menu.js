import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Children } from 'react'

library.add(fas, fab, far);

// From https://stackoverflow.com/questions/53262263/target-active-link-when-the-route-is-active-in-next-js
const ActiveLink = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ''

  const className =
    asPath === props.href || asPath === props.as
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

export default function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <div className="container">
        <Navbar.Brand href="#">microBlock</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <ActiveLink href="/" activeClassName="active" passHref><Nav.Link>หน้าแรก</Nav.Link></ActiveLink>
            <ActiveLink href="/download" activeClassName="active" passHref><Nav.Link>ดาวน์โหลด</Nav.Link></ActiveLink>
            <ActiveLink href="/extension" activeClassName="active" passHref><Nav.Link>ส่วนเสริม</Nav.Link></ActiveLink>
            <ActiveLink href="/learn" activeClassName="active" passHref><Nav.Link>ศูนย์การเรียนรู้</Nav.Link></ActiveLink>
            <ActiveLink href="/blog" activeClassName="active" passHref><Nav.Link>บล็อก</Nav.Link></ActiveLink>
            <ActiveLink href="/community" activeClassName="active" passHref><Nav.Link>ชุมชน</Nav.Link></ActiveLink>
            <ActiveLink href="/contactus" activeClassName="active" passHref><Nav.Link>ติดต่อเรา</Nav.Link></ActiveLink>
          </Nav>
          <Nav>
            <Nav.Link href="https://github.com/microBlock-IDE" target="_blank">Collaborate On <FontAwesomeIcon icon={['fab', 'github']} fixedWidth style={{ width: "16px" }} /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
};
