import React, { FC, memo } from 'react';
import InformationOffOutlineSvg from '../svg/information-off-outline.svg';

export interface IInformationOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InformationOffOutlineIcon: FC<IInformationOffOutlineIconProps> = memo(props => {
  return <InformationOffOutlineSvg {...props} />;
});
