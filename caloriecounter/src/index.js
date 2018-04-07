import 'tachyons'
import 'font-awesome/css/font-awesome.css'
import initModel from './Model'
import update from './Update'
import view from './View'
import app from './App'

const node = document.getElementById('app')

app(initModel, update, view, node)
