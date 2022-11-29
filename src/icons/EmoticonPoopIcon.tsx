import React, { FC, memo } from 'react';
import EmoticonPoopSvg from '../svg/emoticon-poop.svg';

export interface IEmoticonPoopIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonPoopIcon: FC<IEmoticonPoopIconProps> = memo(props => {
  return <EmoticonPoopSvg {...props} />;
});
