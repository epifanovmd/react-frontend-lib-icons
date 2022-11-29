import React, { FC, memo } from 'react';
import PhoneMissedOutlineSvg from '../svg/phone-missed-outline.svg';

export interface IPhoneMissedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneMissedOutlineIcon: FC<IPhoneMissedOutlineIconProps> = memo(props => {
  return <PhoneMissedOutlineSvg {...props} />;
});
