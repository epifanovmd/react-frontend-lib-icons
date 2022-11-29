import React, { FC, memo } from 'react';
import InformationOffSvg from '../svg/information-off.svg';

export interface IInformationOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const InformationOffIcon: FC<IInformationOffIconProps> = memo(props => {
  return <InformationOffSvg {...props} />;
});
