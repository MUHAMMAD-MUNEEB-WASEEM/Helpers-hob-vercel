import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-primary-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Logo />
              </div>
              <span className="text-xl font-bold">Helpers'Hub</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Helping Hands, Caring Hearts
            </p>
            <p className="text-blue-100 text-sm leading-relaxed">
              An independent intermediary platform connecting trusted home helpers with households across Europe.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Company</h4>
            <ul className="space-y-3 text-blue-100">
              <li><Link href="/about" className="hover:text-white transition-elegant">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition-elegant">Services</Link></li>
              <li><Link href="/how-it-works" className="hover:text-white transition-elegant">How it works</Link></li>
              <li><Link href="#" className="hover:text-white transition-elegant">Become a Provider</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Legal</h4>
            <ul className="space-y-3 text-blue-100">
              <li><Link href="/terms" className="hover:text-white transition-elegant">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-elegant">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-elegant">Complaints Procedure</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-lg">Support</h4>
            <ul className="space-y-3 text-blue-100">
              <li><Link href="/contact" className="hover:text-white transition-elegant">Contact</Link></li>
              <li><a href="mailto:support@helpershub.nl" className="hover:text-white transition-elegant">support@helpershub.nl</a></li>
              <li><p className="text-sm">Exquisite Services BV</p></li>
              <li><p className="text-sm">KvK 90849086 · VAT NL865473754B01</p></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-400/30 pt-8 text-center text-blue-100 text-sm">
          <p>&copy; 2024 Exquisite Services BV — KvK 908. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
