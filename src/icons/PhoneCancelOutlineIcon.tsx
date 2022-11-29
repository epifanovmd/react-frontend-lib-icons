import React, { FC, memo } from 'react';
import PhoneCancelOutlineSvg from '../svg/phone-cancel-outline.svg';

export interface IPhoneCancelOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneCancelOutlineIcon: FC<IPhoneCancelOutlineIconProps> = memo(props => {
  return <PhoneCancelOutlineSvg {...props} />;
});
