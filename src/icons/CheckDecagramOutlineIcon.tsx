import React, { FC, memo } from 'react';
import CheckDecagramOutlineSvg from '../svg/check-decagram-outline.svg';

export interface ICheckDecagramOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CheckDecagramOutlineIcon: FC<ICheckDecagramOutlineIconProps> = memo(props => {
  return <CheckDecagramOutlineSvg {...props} />;
});
