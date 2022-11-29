import React, { FC, memo } from 'react';
import EmoticonExcitedSvg from '../svg/emoticon-excited.svg';

export interface IEmoticonExcitedIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonExcitedIcon: FC<IEmoticonExcitedIconProps> = memo(props => {
  return <EmoticonExcitedSvg {...props} />;
});
