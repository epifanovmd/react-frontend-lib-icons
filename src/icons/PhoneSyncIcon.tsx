import React, { FC, memo } from 'react';
import PhoneSyncSvg from '../svg/phone-sync.svg';

export interface IPhoneSyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PhoneSyncIcon: FC<IPhoneSyncIconProps> = memo(props => {
  return <PhoneSyncSvg {...props} />;
});
