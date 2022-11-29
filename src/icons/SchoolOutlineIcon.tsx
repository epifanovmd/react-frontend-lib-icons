import React, { FC, memo } from 'react';
import SchoolOutlineSvg from '../svg/school-outline.svg';

export interface ISchoolOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SchoolOutlineIcon: FC<ISchoolOutlineIconProps> = memo(props => {
  return <SchoolOutlineSvg {...props} />;
});
