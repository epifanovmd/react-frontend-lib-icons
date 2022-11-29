import React, { FC, memo } from 'react';
import EmoticonKissOutlineSvg from '../svg/emoticon-kiss-outline.svg';

export interface IEmoticonKissOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonKissOutlineIcon: FC<IEmoticonKissOutlineIconProps> = memo(props => {
  return <EmoticonKissOutlineSvg {...props} />;
});
