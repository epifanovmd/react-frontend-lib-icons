import React, { FC, memo } from 'react';
import EmoticonPoopOutlineSvg from '../svg/emoticon-poop-outline.svg';

export interface IEmoticonPoopOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonPoopOutlineIcon: FC<IEmoticonPoopOutlineIconProps> = memo(props => {
  return <EmoticonPoopOutlineSvg {...props} />;
});
