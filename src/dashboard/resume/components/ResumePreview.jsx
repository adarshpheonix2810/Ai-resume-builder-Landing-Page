import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext } from 'react'
import PersonalDetailPreview from './preview/PersonalDetailPreview';
import ExperiencePreview from './preview/ExperiencePreview';
import EducationalPreview from './preview/EducationalPreview';
import SkillsPreview from './preview/SkillsPreview';
import SummeryPreview from './preview/SummaryPreview';


function ResumePreview() {

    const {resumeInfo,setResumeInfo}=useContext(ResumeInfoContext)

  return (
    <div className='shadow-lg h-full p-14 border-t-[20px]'
    style={{
        borderColor:resumeInfo?.themeColor
    }}>
        {/* Personal Detail  */}
            <PersonalDetailPreview resumeInfo={resumeInfo} />
        {/* Summery  */}
            <SummeryPreview resumeInfo={resumeInfo} />
        {/* Professional Experience  */}
            <ExperiencePreview resumeInfo={resumeInfo} />
        {/* {resumeInfo?.Experience?.length>0}*/}
         {/* Educational  */}
            <EducationalPreview resumeInfo={resumeInfo} />
        {/* Skilss  */}
            <SkillsPreview resumeInfo={resumeInfo} />
        
    </div>
  )
}

export default ResumePreview