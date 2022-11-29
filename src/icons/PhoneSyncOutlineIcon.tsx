import React, { FC, memo } from 'react';
import PhoneSyncOutlineSvg from '../svg/phone-sync-outline.svg';

export interface IPhoneSyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneSyncOutlineIcon: FC<IPhoneSyncOutlineIconProps> = memo(props => {
  return <PhoneSyncOutlineSvg {...props} />;
});
