import React, { FC, memo } from 'react';
import HandExtendedOutlineSvg from '../svg/hand-extended-outline.svg';

export interface IHandExtendedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandExtendedOutlineIcon: FC<IHandExtendedOutlineIconProps> = memo(props => {
  return <HandExtendedOutlineSvg {...props} />;
});
