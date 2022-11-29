import React, { FC, memo } from 'react';
import EmoticonAngryOutlineSvg from '../svg/emoticon-angry-outline.svg';

export interface IEmoticonAngryOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonAngryOutlineIcon: FC<IEmoticonAngryOutlineIconProps> = memo(props => {
  return <EmoticonAngryOutlineSvg {...props} />;
});
