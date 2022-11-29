import React, { FC, memo } from 'react';
import HandExtendedSvg from '../svg/hand-extended.svg';

export interface IHandExtendedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandExtendedIcon: FC<IHandExtendedIconProps> = memo(props => {
  return <HandExtendedSvg {...props} />;
});
