import { motion } from 'framer-motion'
import { FaUserGraduate, FaGraduationCap } from 'react-icons/fa'
import { SlGraduation } from 'react-icons/sl'
import { BsFillJournalBookmarkFill } from 'react-icons/bs'
import { GoBook } from 'react-icons/go'
import './education.css'

const educationItems = [
  {
    icon:    <FaUserGraduate />,
    degree:  'M.Tech — Electronics & Communication',
    school:  'Jamia Millia Islamia (JMI)',
    score:   '88%',
    period:  '2021 – 2023',
    color:   '#818cf8',
  },
  {
    icon:    <FaGraduationCap />,
    degree:  'B.E. — Electronics & Communication',
    school:  'Jamia Millia Islamia (JMI)',
    score:   '74%',
    period:  '2016 – 2020',
    color:   '#22d3ee',
  },
  {
    icon:    <SlGraduation />,
    degree:  'Diploma — Electronics Engineering',
    school:  'Jamia Millia Islamia (JMI)',
    score:   '79.9%',
    period:  '2013 – 2016',
    color:   '#f472b6',
  },
  {
    icon:    <BsFillJournalBookmarkFill />,
    degree:  'Senior Secondary (XII)',
    school:  'Saint Vivekanand Sr Sec Public School, CBSE',
    score:   '74%',
    period:  '2011 – 2013',
    color:   '#fb923c',
  },
  {
    icon:    <GoBook />,
    degree:  'Secondary School (X)',
    school:  'Saint Vivekanand Sr Sec Public School, CBSE',
    score:   '79.8%',
    period:  '2009 – 2011',
    color:   '#4ade80',
  },
]

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section__label">Academic Background</span>
          <h2 className="section__title">Education</h2>
        </motion.div>

        <div className="education__grid">
          {educationItems.map(({ icon, degree, school, score, period, color }, i) => (
            <motion.article
              key={degree}
              className="education__card glass-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
            >
              <span className="education__icon" style={{ color }} aria-hidden="true">
                {icon}
              </span>
              <h4 className="education__degree">{degree}</h4>
              <p className="education__school">{school}</p>
              <div className="education__meta">
                <span className="education__score">{score}</span>
                <span className="education__period">{period}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
