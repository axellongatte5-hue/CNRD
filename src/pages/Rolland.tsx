"use client"

import { MapPin, Calendar, Award, AlertTriangle, Users, BookOpen, FileText, Quote } from 'lucide-react';

export default function Rolland() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Navigation */}
      <nav style={{ 
        backgroundColor: '#ffffff', 
        borderBottom: '1px solid #e5e7eb', 
        padding: '1rem 2rem' 
      }}>
        <div style={{ 
          maxWidth: '80rem', 
          margin: '0 auto', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between' 
        }}>
          <a href="/" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            textDecoration: 'none',
            transition: 'opacity 0.2s'
          }}>
            <Award style={{ width: '1.25rem', height: '1.25rem', color: '#d97706' }} />
            <span style={{ fontWeight: '600', color: '#1f2937' }}>Mémoire de la Déportation</span>
          </a>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#biographie" style={{ color: '#4b5563', fontSize: '0.875rem', textDecoration: 'none' }}>Biographie</a>
            <a href="#deportation" style={{ color: '#4b5563', fontSize: '0.875rem', textDecoration: 'none' }}>Déportation</a>
            <a href="#temoignages" style={{ color: '#4b5563', fontSize: '0.875rem', textDecoration: 'none' }}>Témoignages</a>
            <a href="#sources" style={{ color: '#4b5563', fontSize: '0.875rem', textDecoration: 'none' }}>Sources</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ 
        backgroundColor: '#0f172a', 
        color: '#ffffff', 
        padding: '5rem 2rem' 
      }}>
        <div style={{ 
          maxWidth: '80rem', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '3rem', 
          alignItems: 'center' 
        }}>
          <div>
            <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '1rem' }}>Yves Rolland</h1>
            <p style={{ color: '#fbbf24', fontSize: '1.25rem', marginBottom: '1.5rem' }}>1913 - Libéré en 1945</p>
            <p style={{ color: '#d1d5db', fontSize: '1.125rem', marginBottom: '1.5rem' }}>Déporté à Neuengamme et Buchenwald, marin-pêcheur breton</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <MapPin style={{ width: '1rem', height: '1rem', color: '#fbbf24' }} />
                <span>Crozon, Finistère, Bretagne</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                <Calendar style={{ width: '1rem', height: '1rem', color: '#fbbf24' }} />
                <span>31 août 1913</span>
              </div>
            </div>
          </div>
          <div style={{ 
            backgroundColor: '#1e293b', 
            padding: '2rem', 
            borderRadius: '0.5rem' 
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
              <div style={{ 
                width: '6rem', 
                height: '6rem', 
                backgroundColor: '#334155', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}>
                <Users style={{ width: '3rem', height: '3rem', color: '#64748b' }} />
              </div>
            </div>
            <p style={{ textAlign: 'center', color: '#d1d5db', fontStyle: 'italic' }}>
              "Nous voulons tenir le serment que nous avons fait à la libération lors de la commémoration des 151 000 morts à Buchenwald..."
            </p>
          </div>
        </div>
      </div>

      {/* Chronologie */}
      <div style={{ maxWidth: '64rem', margin: '0 auto', padding: '4rem 2rem' }}>
        <h2 style={{ 
          fontSize: '1.875rem', 
          fontWeight: '700', 
          textAlign: 'center', 
          marginBottom: '4rem', 
          color: '#1f2937' 
        }}>Chronologie</h2>

        <div style={{ position: 'relative' }}>
          <div style={{ 
            position: 'absolute', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            height: '100%', 
            width: '0.25rem', 
            background: 'linear-gradient(to bottom, #fbbf24, #ef4444, #22c55e)' 
          }}></div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {/* 1913 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ width: '50%', textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>Naissance</h3>
                <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>31 août 1913 à Crozon (Finistère)</p>
                <p style={{ fontSize: '0.75rem', color: '#2563eb', marginTop: '0.25rem' }}>Marin-pêcheur breton</p>
              </div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ 
                  width: '1rem', 
                  height: '1rem', 
                  backgroundColor: '#fbbf24', 
                  borderRadius: '50%', 
                  border: '4px solid white', 
                  boxShadow: '0 1px 3px rgba(0,0,0,0.12)' 
                }}></div>
              </div>
              <div style={{ width: '50%', color: '#d97706', fontWeight: '700', fontSize: '1.25rem' }}>1913</div>
            </div>

            {/* 1944 - Rafle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ width: '50%', textAlign: 'right', color: '#dc2626', fontWeight: '700', fontSize: '1.25rem' }}>30 juin 1944</div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ 
                  width: '1rem', 
                  height: '1rem', 
                  backgroundColor: '#ef4444', 
                  borderRadius: '50%', 
                  border: '4px solid white', 
                  boxShadow: '0 1px 3px rgba(0,0,0,0.12)' 
                }}></div>
              </div>
              <div style={{ width: '50%', backgroundColor: '#fef2f2', padding: '1rem', borderRadius: '0.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>Arrestation</h3>
                <p style={{ fontSize: '0.875rem', color: '#dc2626' }}>Rafle à Crozon</p>
                <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.25rem' }}>Réquisitionné pour le STO dans le Finistère</p>
              </div>
            </div>

            {/* 1944 - Déportation */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ width: '50%', textAlign: 'right', backgroundColor: '#fef2f2', padding: '1rem', borderRadius: '0.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>Déportation vers Neuengamme</h3>
                <p style={{ fontSize: '0.875rem', color: '#dc2626' }}>Départ de Compiègne</p>
                <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.25rem' }}>Matricule n°40419</p>
              </div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ 
                  width: '1rem', 
                  height: '1rem', 
                  backgroundColor: '#ef4444', 
                  borderRadius: '50%', 
                  border: '4px solid white', 
                  boxShadow: '0 1px 3px rgba(0,0,0,0.12)' 
                }}></div>
              </div>
              <div style={{ width: '50%', color: '#dc2626', fontWeight: '700', fontSize: '1.25rem' }}>28 juillet 1944</div>
            </div>

            {/* Kommandos */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ width: '50%', textAlign: 'right', color: '#dc2626', fontWeight: '700', fontSize: '1.25rem' }}>1944</div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ 
                  width: '1rem', 
                  height: '1rem', 
                  backgroundColor: '#ef4444', 
                  borderRadius: '50%', 
                  border: '4px solid white', 
                  boxShadow: '0 1px 3px rgba(0,0,0,0.12)' 
                }}></div>
              </div>
              <div style={{ width: '50%', backgroundColor: '#fef2f2', padding: '1rem', borderRadius: '0.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>Kommandos</h3>
                <p style={{ fontSize: '0.875rem', color: '#dc2626' }}>Salzgitter (travail forcé)</p>
                <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.25rem' }}>Husum-Schwesing (tranchées anti-chars)</p>
              </div>
            </div>

            {/* Buchenwald */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ width: '50%', textAlign: 'right', backgroundColor: '#fef2f2', padding: '1rem', borderRadius: '0.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>Transfert à Buchenwald</h3>
                <p style={{ fontSize: '0.875rem', color: '#dc2626' }}>Lors de l'évacuation du camp</p>
                <p style={{ fontSize: '0.75rem', color: '#dc2626', marginTop: '0.25rem' }}>Neuf mois de détention</p>
              </div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ 
                  width: '1rem', 
                  height: '1rem', 
                  backgroundColor: '#ef4444', 
                  borderRadius: '50%', 
                  border: '4px solid white', 
                  boxShadow: '0 1px 3px rgba(0,0,0,0.12)' 
                }}></div>
              </div>
              <div style={{ width: '50%', color: '#dc2626', fontWeight: '700', fontSize: '1.25rem' }}>Mars 1945</div>
            </div>

            {/* Libération */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ width: '50%', textAlign: 'right', color: '#16a34a', fontWeight: '700', fontSize: '1.25rem' }}>12 avril 1945</div>
              <div style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ 
                  width: '1rem', 
                  height: '1rem', 
                  backgroundColor: '#22c55e', 
                  borderRadius: '50%', 
                  border: '4px solid white', 
                  boxShadow: '0 1px 3px rgba(0,0,0,0.12)' 
                }}></div>
              </div>
              <div style={{ width: '50%', backgroundColor: '#f0fdf4', padding: '1rem', borderRadius: '0.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '700', color: '#1f2937', marginBottom: '0.5rem' }}>Libération</h3>
                <p style={{ fontSize: '0.875rem', color: '#16a34a' }}>À Hanovre</p>
                <p style={{ fontSize: '0.75rem', color: '#16a34a', marginTop: '0.25rem' }}>Par la Résistance clandestine et groupes d'intervention</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Déportation */}
      <div id="deportation" style={{ backgroundColor: '#f9fafb', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#1f2937' }}>Le Parcours de Déportation</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ gridColumn: 'span 2', backgroundColor: '#ffffff', padding: '2rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem' }}>Neuengamme et ses Kommandos</h3>
              <p style={{ color: '#374151', lineHeight: '1.75', marginBottom: '1rem' }}>
                Yves Rolland est déporté le 28 juillet 1944 de Compiègne vers le camp de concentration de Neuengamme, où il reçoit le matricule 40419. 
                Le camp de Neuengamme, situé près de Hambourg, était l'un des plus grands camps de concentration nazis en Allemagne.
              </p>
              <p style={{ color: '#374151', lineHeight: '1.75', marginBottom: '1rem' }}>
                Il est affecté à plusieurs Kommandos, notamment <strong>Salzgitter</strong>, un camp de travailleurs civils situé au sud de Brunswick, 
                où les détenus travaillaient pour les entreprises H. Göring à la fabrication d'armement.
              </p>
              <p style={{ color: '#374151', lineHeight: '1.75' }}>
                Il passe également par <strong>Husum-Schwesing</strong>, un Kommando du Schleswig-Holstein près de la Mer du Nord, 
                fonctionnant de septembre à décembre 1944 pour creuser des tranchées anti-chars dans la zone côtière marécageuse. 
                Plus de 1500 détenus y travaillaient dans des conditions inhumaines.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ backgroundColor: '#fef3c7', padding: '1.5rem', borderRadius: '0.5rem' }}>
                <h3 style={{ fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <MapPin style={{ width: '1.25rem', height: '1.25rem', color: '#d97706' }} />
                  Camps traversés
                </h3>
                <ul style={{ fontSize: '0.875rem', color: '#374151' }}>
                  <li style={{ marginBottom: '0.5rem' }}>• Compiègne (transit)</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Neuengamme (camp principal)</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Salzgitter (Kommando)</li>
                  <li style={{ marginBottom: '0.5rem' }}>• Husum-Schwesing (Kommando)</li>
                  <li>• Buchenwald</li>
                </ul>
              </div>

              <div style={{ backgroundColor: '#dbeafe', padding: '1.5rem', borderRadius: '0.5rem' }}>
                <h3 style={{ fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText style={{ width: '1.25rem', height: '1.25rem', color: '#2563eb' }} />
                  Matricule
                </h3>
                <p style={{ fontSize: '2rem', fontWeight: '700', color: '#1e40af' }}>40419</p>
                <p style={{ fontSize: '0.875rem', color: '#374151' }}>Camp de Neuengamme</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Buchenwald */}
      <div style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#1f2937' }}>Buchenwald</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            <div style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '2rem', borderRadius: '0.5rem' }}>
              <h3 style={{ color: '#fbbf24', fontWeight: '700', fontSize: '1.25rem', marginBottom: '1rem' }}>Le Camp de Buchenwald</h3>
              <p style={{ color: '#d1d5db', lineHeight: '1.75', marginBottom: '1rem' }}>
                Yves Rolland est transféré à Buchenwald en mars 1945 lors de l'évacuation du camp de Neuengamme. 
                Il y passe neuf mois avant d'être libéré le 12 avril 1945 à Hanovre.
              </p>
              <p style={{ color: '#d1d5db', lineHeight: '1.75' }}>
                À Buchenwald, il existait ce que les détenus appelaient le "petit camp" et le "grand camp". 
                Le petit camp recevait tous les nouveaux arrivants pour une sorte de quarantaine, 
                tandis que le grand camp recevait ceux qui avaient déjà effectué un certain séjour.
              </p>
            </div>

            <div style={{ backgroundColor: '#fef3c7', padding: '2rem', borderRadius: '0.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ 
                width: '5rem', 
                height: '5rem', 
                backgroundColor: '#d97706', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                marginBottom: '1.5rem' 
              }}>
                <Award style={{ width: '2.5rem', height: '2.5rem', color: '#ffffff' }} />
              </div>
              <h3 style={{ fontWeight: '700', color: '#1f2937', fontSize: '1.25rem', marginBottom: '1rem' }}>Le Serment de Buchenwald</h3>
              <p style={{ color: '#374151', textAlign: 'center' }}>
                À la libération du camp, les survivants ont prêté serment lors de la commémoration des 151 000 morts, 
                s'engageant à témoigner et à poursuivre les responsables de ces crimes.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Citation */}
      <div style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '56rem', margin: '0 auto', textAlign: 'center' }}>
          <Quote style={{ width: '3rem', height: '3rem', color: '#fbbf24', margin: '0 auto 1.5rem' }} />
          <p style={{ fontSize: '1.25rem', fontStyle: 'italic', marginBottom: '1rem', lineHeight: '1.75' }}>
            "Des convois entiers, des milliers de personnes sont envoyés dans des chambres à gaz, à Buchenwald, 
            on les assassinait, on les fusillait, on les laissait mourir de froid en les laissant stationner 
            durant des heures exposés à tous les vents par -15 ou -20 degrés."
          </p>
          <p style={{ fontSize: '0.875rem', color: '#fbbf24' }}>
            - Témoignage sur les conditions à Buchenwald
          </p>
        </div>
      </div>

      {/* Témoignages */}
      <div id="temoignages" style={{ padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#1f2937' }}>Témoignages sur la Déportation</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <AlertTriangle style={{ width: '1.5rem', height: '1.5rem', color: '#dc2626' }} />
                <h3 style={{ fontWeight: '700', color: '#1f2937' }}>Le Travail Forcé</h3>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#374151', fontStyle: 'italic' }}>
                "La deuxième période d'extermination est celle qui fut conditionnée par des raisons de guerre, 
                le besoin sans cesse accru de matériel humain pour la production de guerre allemande. 
                C'est celle de l'extermination par le travail forcé dans les usines d'armement, 
                dans les usines souterraines, pour la fabrication des fameuses armes secrètes: V1, V2, V3."
              </p>
            </div>

            <div style={{ backgroundColor: '#fff7ed', borderLeft: '4px solid #f97316', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <Users style={{ width: '1.5rem', height: '1.5rem', color: '#ea580c' }} />
                <h3 style={{ fontWeight: '700', color: '#1f2937' }}>L'Arrivée au Camp</h3>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#374151', fontStyle: 'italic' }}>
                "Un convoi de 2 000 Polonais arrive à Buchenwald. On les parque sur la place d'appel. 
                Ils doivent immédiatement se tenir au garde à vous, immobiles des heures durant. 
                Ils n'avaient pas mangé depuis quelques jours et on les laisse ainsi debouts 
                une douzaine d'heures par -15 degrés."
              </p>
            </div>

            <div style={{ backgroundColor: '#f0fdf4', borderLeft: '4px solid #22c55e', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <BookOpen style={{ width: '1.5rem', height: '1.5rem', color: '#16a34a' }} />
                <h3 style={{ fontWeight: '700', color: '#1f2937' }}>Le Devoir de Mémoire</h3>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#374151', fontStyle: 'italic' }}>
                "Ce n'est pas de gaieté de cœur que nous le faisons ni par plaisir sadique, 
                nous ne le faisons pas non plus pour nous ériger en martyre ou en héros, 
                nous le faisons par devoir. Nous voulons tenir le serment que nous avons fait 
                à la libération lors de la commémoration des 151 000 morts à Buchenwald."
              </p>
            </div>

            <div style={{ backgroundColor: '#f5f3ff', borderLeft: '4px solid #8b5cf6', padding: '1.5rem', borderRadius: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <FileText style={{ width: '1.5rem', height: '1.5rem', color: '#7c3aed' }} />
                <h3 style={{ fontWeight: '700', color: '#1f2937' }}>La Mortalité</h3>
              </div>
              <p style={{ fontSize: '0.875rem', color: '#374151', fontStyle: 'italic' }}>
                "Du 1er janvier au 28 janvier pour un effectif de 69 400 internés il y eut 1 614 morts. 
                Du 29 janvier au 25 février sur un effectif de 96 400 internés il y eut 3 700 morts. 
                Ce qui fait une moyenne de 175 morts par jour environ."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sources */}
      <div id="sources" style={{ backgroundColor: '#f9fafb', padding: '4rem 2rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: '700', textAlign: 'center', marginBottom: '3rem', color: '#1f2937' }}>Sources et Archives</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Archives Arolsen</h3>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.75rem' }}>
                Ausweis (laissez-passer) pour marin-pêcheur avec photo d'identité.
              </p>
              <a 
                href="https://collections.arolsen-archives.org/de/search/person/74524548?s=Yves%20Rolland&t=222899&p=1" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '0.75rem', color: '#2563eb', textDecoration: 'underline' }}
              >
                Consulter les archives →
              </a>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Livre Mémorial</h3>
              <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '0.75rem' }}>
                Fondation pour la Mémoire de la Déportation, 2006.
              </p>
              <a 
                href="http://www.bddm.org/liv/details.php?id=I.250.#ROLLAND" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ fontSize: '0.75rem', color: '#2563eb', textDecoration: 'underline' }}
              >
                Consulter le livre mémorial →
              </a>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontWeight: '700', color: '#1f2937', marginBottom: '0.75rem' }}>Bibliographie</h3>
              <p style={{ fontSize: '0.875rem', color: '#4b5563' }}>
                Lalieu, Olivier, <em>La zone grise ? La Résistance française à Buchenwald</em>, Paris, Tallandier, 2005.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '2rem' }}>
        <div style={{ maxWidth: '72rem', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Award style={{ width: '1.25rem', height: '1.25rem', color: '#fbbf24' }} />
            <span style={{ fontWeight: '600' }}>Mémoire de la Déportation</span>
          </div>
          <p style={{ color: '#9ca3af', fontSize: '0.875rem', marginBottom: '0.25rem' }}>
            En mémoire de Yves Rolland et de tous les déportés.
          </p>
          <p style={{ color: '#6b7280', fontSize: '0.75rem' }}>Né le 31 août 1913 à Crozon • Libéré le 12 avril 1945</p>
        </div>
      </footer>
    </div>
  );
}
