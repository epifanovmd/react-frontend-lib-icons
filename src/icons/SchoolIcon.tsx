import React, { FC, memo } from 'react';
import SchoolSvg from '../svg/school.svg';

export interface ISchoolIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SchoolIcon: FC<ISchoolIconProps> = memo(props => {
  return <SchoolSvg {...props} />;
});
