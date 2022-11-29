import React, { FC, memo } from 'react';
import EmoticonDevilOutlineSvg from '../svg/emoticon-devil-outline.svg';

export interface IEmoticonDevilOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EmoticonDevilOutlineIcon: FC<IEmoticonDevilOutlineIconProps> = memo(props => {
  return <EmoticonDevilOutlineSvg {...props} />;
});
