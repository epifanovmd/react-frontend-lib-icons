import React, { FC, memo } from 'react';
import EmoticonWinkOutlineSvg from '../svg/emoticon-wink-outline.svg';

export interface IEmoticonWinkOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonWinkOutlineIcon: FC<IEmoticonWinkOutlineIconProps> = memo(props => {
  return <EmoticonWinkOutlineSvg {...props} />;
});
