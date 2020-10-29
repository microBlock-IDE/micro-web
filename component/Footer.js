import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-light text-dark p-3 mt-5">
        <div className="container">
            <div className="row">
                <div className="col"><a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style={{ borderWidth: 0}} src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a></div>
                <div className="col text-right"><Link href="/support">สมัครใจสนับสนุนเรา</Link></div>
            </div>
        </div>
    </footer>
  )
};
