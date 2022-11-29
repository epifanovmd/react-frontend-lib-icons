import React, { FC, memo } from 'react';
import LeadPencilSvg from '../svg/lead-pencil.svg';

export interface ILeadPencilIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LeadPencilIcon: FC<ILeadPencilIconProps> = memo(props => {
  return <LeadPencilSvg {...props} />;
});
