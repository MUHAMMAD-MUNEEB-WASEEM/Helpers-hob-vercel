import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - Helpers Hub',
  description: 'Terms of service for Helpers Hub.',
}

export default function TermsPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-gray-300">Last updated: May 2024</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold mb-6">Agreement to Terms</h2>
          <p className="text-gray-600 mb-8">
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Helpers Hub ("we," "us," "our," or "Company"), concerning your access to and use of the helpershub.org website as well as any other media form, media channel, mobile website, or mobile application relating, linked, or otherwise connected thereto (collectively, the "Site").
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Use License</h2>
          <p className="text-gray-600 mb-4">
            Permission is granted to temporarily download one copy of the materials (information or software) on Helpers Hub's Site for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 text-gray-600 mb-8 space-y-2">
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the Site</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>

          <h2 className="text-3xl font-bold mb-6 mt-12">Disclaimer</h2>
          <p className="text-gray-600 mb-8">
            The materials on Helpers Hub's Site are provided on an 'as is' basis. Helpers Hub makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Limitations</h2>
          <p className="text-gray-600 mb-8">
            In no event shall Helpers Hub or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Helpers Hub's Site, even if Helpers Hub or an authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Accuracy of Materials</h2>
          <p className="text-gray-600 mb-8">
            The materials appearing on Helpers Hub's Site could include technical, typographical, or photographic errors. Helpers Hub does not warrant that any of the materials on its Site are accurate, complete, or current. Helpers Hub may make changes to the materials contained on its Site at any time without notice.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Links</h2>
          <p className="text-gray-600 mb-8">
            Helpers Hub has not reviewed all of the sites linked to its Site and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Helpers Hub of the site. Use of any such linked website is at the user's own risk.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Modifications</h2>
          <p className="text-gray-600 mb-8">
            Helpers Hub may revise these Terms of Service for its Site at any time without notice. By using this Site, you are agreeing to be bound by the then current version of these Terms of Service.
          </p>

          <h2 className="text-3xl font-bold mb-6 mt-12">Governing Law</h2>
          <p className="text-gray-600">
            These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which Helpers Hub is located, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>
        </div>
      </section>
    </div>
  )
}
