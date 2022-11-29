import React, { FC, memo } from 'react';
import GenderTransgenderSvg from '../svg/gender-transgender.svg';

export interface IGenderTransgenderIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GenderTransgenderIcon: FC<IGenderTransgenderIconProps> = memo(props => {
  return <GenderTransgenderSvg {...props} />;
});
