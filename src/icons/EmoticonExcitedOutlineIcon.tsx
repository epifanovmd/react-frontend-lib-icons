import React, { FC, memo } from 'react';
import EmoticonExcitedOutlineSvg from '../svg/emoticon-excited-outline.svg';

export interface IEmoticonExcitedOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonExcitedOutlineIcon: FC<IEmoticonExcitedOutlineIconProps> = memo(props => {
  return <EmoticonExcitedOutlineSvg {...props} />;
});
