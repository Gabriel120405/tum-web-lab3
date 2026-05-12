import React, { useMemo } from 'react';
import { TinaCMS, TinaProvider, useForm, usePlugin } from 'tinacms';

function TinaEditor({ data }) {
  const cms = useMemo(
    () =>
      new TinaCMS({
        enabled: true,
        sidebar: true,
        toolbar: true,
      }),
    []
  );

  const formConfig = {
    id: 'landing-page-content',
    label: 'Landing Page Content',
    initialValues: data,
    fields: [
      { name: 'hero.title', label: 'Hero Title', component: 'text' },
      { name: 'hero.subtitle', label: 'Hero Subtitle', component: 'textarea' },
      { name: 'hero.ctaText', label: 'CTA Text', component: 'text' },
      { name: 'hero.ctaLink', label: 'CTA Link', component: 'text' },
      { name: 'about.title', label: 'About Section Title', component: 'text' },
      {
        name: 'products',
        label: 'Products',
        component: 'group-list',
        itemProps: (item) => ({ label: item.title }),
        defaultItem: () => ({ emoji: '📌', title: 'New product', description: 'Add description' }),
        fields: [
          { name: 'emoji', label: 'Emoji', component: 'text' },
          { name: 'title', label: 'Product Title', component: 'text' },
          { name: 'description', label: 'Product Description', component: 'textarea' }
        ]
      },
      {
        name: 'about.features',
        label: 'Feature Cards',
        component: 'group-list',
        itemProps: (item) => ({ label: item.title }),
        defaultItem: () => ({ title: 'New feature', description: 'Add description' }),
        fields: [
          { name: 'title', label: 'Feature Title', component: 'text' },
          { name: 'description', label: 'Feature Description', component: 'textarea' }
        ]
      },
      { name: 'contact.title', label: 'Contact Title', component: 'text' },
      { name: 'contact.address', label: 'Contact Address', component: 'textarea' },
      { name: 'contact.phone', label: 'Contact Phone', component: 'text' },
      { name: 'contact.email', label: 'Contact Email', component: 'text' },
      { name: 'contact.hours', label: 'Business Hours', component: 'textarea' }
    ],
    onSubmit: async (values) => {
      const response = await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error('Unable to save content');
      }
      window.location.reload();
    },
  };

  const [formData, form] = useForm(formConfig);
  usePlugin(form);

  return (
    <TinaProvider cms={cms}>
      <main className="min-h-screen bg-slate-50 text-slate-900">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
            <h1 className="text-4xl font-bold mb-3">Europlasmet CMS Editor</h1>
            <p className="text-slate-600 mb-8">Edit the landing page content directly in TinaCMS and save updates back to the repository file.</p>
            <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
              <section className="space-y-4">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <h2 className="text-xl font-semibold mb-4">Current landing page data</h2>
                  <pre className="max-h-[32rem] overflow-auto rounded-lg bg-white p-4 text-sm text-slate-700">{JSON.stringify(formData, null, 2)}</pre>
                </div>
              </section>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                className="rounded-full bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700"
                onClick={() => form.submit()}
              >
                Save Content
              </button>
              <a href="/" className="rounded-full border border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50">Open Landing Page</a>
            </div>
          </div>
        </div>
      </main>
    </TinaProvider>
  );
}

export default TinaEditor;
