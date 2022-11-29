import React, { FC, memo } from 'react';
import InformationOutlineSvg from '../svg/information-outline.svg';

export interface IInformationOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InformationOutlineIcon: FC<IInformationOutlineIconProps> = memo(props => {
  return <InformationOutlineSvg {...props} />;
});
