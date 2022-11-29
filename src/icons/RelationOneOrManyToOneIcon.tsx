import React, { FC, memo } from 'react';
import RelationOneOrManyToOneSvg from '../svg/relation-one-or-many-to-one.svg';

export interface IRelationOneOrManyToOneIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RelationOneOrManyToOneIcon: FC<IRelationOneOrManyToOneIconProps> = memo(props => {
  return <RelationOneOrManyToOneSvg {...props} />;
});
